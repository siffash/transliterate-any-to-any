import fs from "node:fs";
import path from "node:path";
import { describe, it, expect, vi, afterEach } from "vitest";
import { getKuromojiDictFiles, getKuromojiDictUrl } from "../src/helpers/getKuromojiDictUrl.mts";

const ROOT = path.resolve(__dirname, "..");
const ROOT_LOCKFILE = path.join(ROOT, "package-lock.json");
const HOISTED = "node_modules/kuromoji";
const NESTED = "node_modules/kuroshiro-analyzer-kuromoji/node_modules/kuromoji";

const mockLockfile = (packages: Record<string, { version?: string }>) =>
  vi.spyOn(fs, "readFileSync").mockReturnValue(JSON.stringify({ packages }));

const mockDictDir = (files: string[]) =>
  vi
    .spyOn(fs, "readdirSync")
    .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>);

describe("getKuromojiDictUrl", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("with the real package-lock.json", () => {
    it("points to the dictionary of the locked kuromoji version", () => {
      const lock = JSON.parse(fs.readFileSync(ROOT_LOCKFILE, "utf8"));
      expect(getKuromojiDictUrl()).toBe(
        `https://cdn.jsdelivr.net/npm/kuromoji@${lock.packages[HOISTED].version}/dict/`,
      );
    });

    it("matches the installed kuromoji, whose code gets bundled", () => {
      const installed = JSON.parse(
        fs.readFileSync(path.join(ROOT, HOISTED, "package.json"), "utf8"),
      );
      expect(getKuromojiDictUrl()).toContain(`/kuromoji@${installed.version}/`);
    });
  });

  describe("with a mocked package-lock.json", () => {
    it("reads the lockfile at the repository root", () => {
      const readFileSync = mockLockfile({ [HOISTED]: { version: "1.0.0" } });
      getKuromojiDictUrl();
      expect(readFileSync).toHaveBeenCalledWith(ROOT_LOCKFILE, "utf8");
    });

    it("uses the hoisted kuromoji version", () => {
      mockLockfile({ [HOISTED]: { version: "1.0.0" } });
      expect(getKuromojiDictUrl()).toBe("https://cdn.jsdelivr.net/npm/kuromoji@1.0.0/dict/");
    });

    it("prefers the copy nested under kuroshiro-analyzer-kuromoji, which the analyzer loads", () => {
      mockLockfile({ [HOISTED]: { version: "1.0.0" }, [NESTED]: { version: "0.1.2" } });
      expect(getKuromojiDictUrl()).toBe("https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/");
    });

    it("throws when kuromoji is missing", () => {
      mockLockfile({ "node_modules/kuroshiro": { version: "1.2.1" } });
      expect(() => getKuromojiDictUrl()).toThrow("kuromoji not found in package-lock.json");
    });

    it("throws when the kuromoji entry has no version", () => {
      mockLockfile({ [HOISTED]: {} });
      expect(() => getKuromojiDictUrl()).toThrow("kuromoji not found in package-lock.json");
    });
  });
});

describe("getKuromojiDictFiles", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("lists the dictionary files of the installed kuromoji", () => {
    const files = getKuromojiDictFiles();
    expect(files).toEqual([
      "base.dat.gz",
      "cc.dat.gz",
      "check.dat.gz",
      "tid.dat.gz",
      "tid_map.dat.gz",
      "tid_pos.dat.gz",
      "unk.dat.gz",
      "unk_char.dat.gz",
      "unk_compat.dat.gz",
      "unk_invoke.dat.gz",
      "unk_map.dat.gz",
      "unk_pos.dat.gz",
    ]);
    for (const file of files) {
      expect(fs.existsSync(path.join(ROOT, HOISTED, "dict", file))).toBe(true);
    }
  });

  it("reads the dictionary of the same copy the URL is based on", () => {
    mockLockfile({ [HOISTED]: { version: "1.0.0" }, [NESTED]: { version: "0.1.2" } });
    const readdirSync = mockDictDir([]);
    getKuromojiDictFiles();
    expect(readdirSync).toHaveBeenCalledWith(path.join(ROOT, NESTED, "dict"));
  });

  it("keeps only the .dat.gz files, sorted", () => {
    mockDictDir(["unk.dat.gz", "README.md", "base.dat.gz", ".DS_Store"]);
    expect(getKuromojiDictFiles()).toEqual(["base.dat.gz", "unk.dat.gz"]);
  });

  it("throws when kuromoji is missing", () => {
    mockLockfile({});
    expect(() => getKuromojiDictFiles()).toThrow("kuromoji not found in package-lock.json");
  });
});
