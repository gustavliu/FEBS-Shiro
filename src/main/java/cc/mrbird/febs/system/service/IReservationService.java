package cc.mrbird.febs.system.service;

import cc.mrbird.febs.system.entity.Reservation;
import com.baomidou.mybatisplus.extension.service.IService;

public interface IReservationService extends IService<Reservation> {

    /**
     * 新增预约单
     *
     * @param user user
     */
    void createReservation(Reservation reservation);
}
