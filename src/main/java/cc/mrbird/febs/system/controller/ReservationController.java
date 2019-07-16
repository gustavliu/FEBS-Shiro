package cc.mrbird.febs.system.controller;

import cc.mrbird.febs.common.controller.BaseController;
import cc.mrbird.febs.common.entity.FebsResponse;
import cc.mrbird.febs.common.exception.FebsException;
import cc.mrbird.febs.system.entity.Reservation;
import cc.mrbird.febs.system.service.IReservationService;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@Validated
@RestController
@RequestMapping("reserve")
public class ReservationController extends BaseController {
    @Autowired
    private IReservationService reservationService;

    @PostMapping("add")
    public FebsResponse submitReserve(@RequestBody Reservation reservation) throws FebsException {
        try {
            this.reservationService.createReservation(reservation);
            return new FebsResponse().success();
        } catch (Exception e) {
            String message = "新增预约单失败";
            log.error(message, e);
            throw new FebsException(message);
        }
    }
}
