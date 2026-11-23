package com.siffash.transliterate;

import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.graphics.Rect;
import android.os.Build;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private static final int LARGE_SCREEN_DP = 600;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        applyOrientation(getResources().getConfiguration());
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        applyOrientation(newConfig);
    }

    private void applyOrientation(Configuration config) {
        int orientation = displaySmallestWidthDp(config) < LARGE_SCREEN_DP
            ? ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
            : ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED;
        if (getRequestedOrientation() != orientation) {
            setRequestedOrientation(orientation);
        }
    }

    private int displaySmallestWidthDp(Configuration config) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.R) {
            return config.smallestScreenWidthDp;
        }
        Rect bounds = getWindowManager().getMaximumWindowMetrics().getBounds();
        float density = config.densityDpi / 160f;
        return (int) (Math.min(bounds.width(), bounds.height()) / density);
    }
}
