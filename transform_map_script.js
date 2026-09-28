(function transformRow(source, target, map, log, isUpdate) {

    // Copy data from Import Set table to Target table
    target.u_name = source.u_name;
    target.u_roll_no = source.u_roll_no;
    target.u_department = source.u_department;
    target.u_email = source.u_email;
    target.u_phone = source.u_phone;

})(source, target, map, log, action === "update");
