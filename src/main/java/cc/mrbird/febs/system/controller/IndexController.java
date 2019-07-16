package cc.mrbird.febs.system.controller;


import cc.mrbird.febs.common.controller.BaseController;
import cc.mrbird.febs.common.entity.FebsResponse;
import cc.mrbird.febs.common.entity.GustavConstant;
import cc.mrbird.febs.common.exception.FebsException;
import cc.mrbird.febs.common.utils.GustavUtil;
import cc.mrbird.febs.system.entity.Reservation;
import cc.mrbird.febs.system.entity.User;
import cc.mrbird.febs.system.service.IReservationService;
import cc.mrbird.febs.system.service.IUserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@Controller("gustav")
public class IndexController extends BaseController {


    @GetMapping(GustavConstant.VIEW_PREFIX + "index")
    public String index() {
        return GustavUtil.view("index");
    }

    @GetMapping(GustavConstant.VIEW_PREFIX + "reserve")
    public String reserve() {
        return GustavUtil.view("reserve");
    }


}
