package cc.mrbird.febs.common.utils;

import cc.mrbird.febs.common.entity.FebsConstant;
import cc.mrbird.febs.common.entity.GustavConstant;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class GustavUtil {
    public static String view(String viewName) {
        return GustavConstant.VIEW_PREFIX + viewName;
    }
}
