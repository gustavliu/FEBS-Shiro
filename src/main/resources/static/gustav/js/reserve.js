var validator;
var $reserveAddForm = $("#reserve-add-form");


$(function () {
    // $("input[name='status']").change(function () {
    //     var checked = $(this).is(":checked");
    //     var $status_label = $("#status");
    //     if (checked) $status_label.html('可用');
    //     else $status_label.html('禁用');
    // });

    $("#reserve-submit").click(function () {
        //获取表单数据，并序列化
        var formData = $reserveAddForm.serializeArray();

        //将序列化数据转为对象
        var formObject = {};
        for (var item in formData) {
            formObject[formData[item].name] = formData[item].value;
        }
        // var dateString = $('input[name="reserveDate"]').val();
        // var date = new Date(dateString.replace(/-/,"/"));
        // formObject.reserveDate = date;
        var formJSON = JSON.stringify(formObject);
        $.ajax({
            url : ctx + "reserve/add",
            type : "POST",
            data : formJSON,
            async : false, // 异步提交
            cache : false,
            dataType: "json",
            contentType: "application/json",
            processData: false
        }).done(function(result, textStatus, jqXHR) {

        }).fail(function(jqXHR, textStatus, errorThrown) {

        }).always(function () {

        });
    });


});


function validateRule() {
    var icon = "<i class='zmdi zmdi-close-circle zmdi-hc-fw'></i> ";
    validator = $userAddForm.validate({
        rules: {
            username: {
                required: true,
                minlength: 3,
                maxlength: 10,
                remote: {
                    url: "user/checkUserName",
                    type: "get",
                    dataType: "json",
                    data: {
                        username: function () {
                            return $("input[name='username']").val().trim();
                        },
                        oldusername: function () {
                            return $("input[name='oldusername']").val().trim();
                        }
                    }
                }
            },
            email: {
                email: true
            },
            roles: {
                required: true
            },
            ssex: {
                required: true
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":checkbox") || element.is(":radio")) {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        },
        messages: {
            username: {
                required: icon + "请输入用户名",
                minlength: icon + "用户名长度3到10个字符",
                remote: icon + "用户名已经存在"
            },
            roles: icon + "请选择用户角色",
            email: icon + "邮箱格式不正确",
            ssex: icon + "请选择性别"
        }
    });
}

function createDeptTree() {
    $.post(ctx + "dept/tree", {}, function (r) {
        if (r.code === 0) {
            var data = r.msg;
            $('#deptTree').jstree({
                "core": {
                    'data': data.children,
                    'multiple': false // 取消多选
                },
                "state": {
                    "disabled": true
                },
                "checkbox": {
                    "three_state": false // 取消选择父节点后选中所有子节点
                },
                "plugins": ["wholerow", "checkbox"]
            });
        } else {
            $MB.n_danger(r.msg);
        }
    })
}

function getDept() {
    var ref = $('#deptTree').jstree(true);
    $("[name='deptId']").val(ref.get_selected()[0]);
}