package cc.mrbird.febs.system.service.impl;

import cc.mrbird.febs.common.authentication.ShiroRealm;
import cc.mrbird.febs.common.utils.MD5Util;
import cc.mrbird.febs.system.entity.Reservation;
import cc.mrbird.febs.system.entity.User;
import cc.mrbird.febs.system.mapper.ReservationMapper;
import cc.mrbird.febs.system.service.IReservationService;
import com.baomidou.mybatisplus.core.toolkit.StringPool;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true, rollbackFor = Exception.class)
public class ReservationServerImpl extends ServiceImpl<ReservationMapper, Reservation> implements IReservationService {

    @Autowired
    private IReservationService reservationService;
    @Autowired
    private ShiroRealm shiroRealm;

    public void createReservation(Reservation reservation){
        save(reservation);
    }
}
