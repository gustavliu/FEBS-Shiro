package cc.mrbird.febs.system.entity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.wuwenze.poi.annotation.Excel;
import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
@TableName("t_reservation")
@Excel("用户信息表")
public class Reservation implements Serializable {
    private static final long serialVersionUID = -4352868070794165001L;

    @TableId(value = "USER_ID", type = IdType.AUTO)
    private Long reservationId;

    @TableField("ORGANIZATION")
    private String organization;

    @TableField("CONTACT")
    private String contact;

    @TableField("PHONE")
    private Long phone;

    @TableField("VISITOR_NUM")
    private int visitorNum;

    @TableField("SYSTEM")
    private String system;

    @TableField("CREATE_TIME")
    private String createTime;

    @TableField("RESERVE_DATE")
    @JsonFormat( pattern="yyyy-MM-dd")
    private Date reserveDate;

    @TableField("RESERVE_TIME")
    private String reserveTime;

    @TableField("WITH_NARRATOR")
    private Boolean withNarrator;

    @TableField("STATUS")
    private String status;
}
