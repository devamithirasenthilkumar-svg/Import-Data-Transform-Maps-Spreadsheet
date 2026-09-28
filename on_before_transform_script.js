(function runTransformScript(source, map, log, target) {

    // Skip the row when Roll Number is empty
    if (!source.u_roll_no) {
        ignore = true;
        log.info("Skipped row: Roll Number is empty.");
    }

})(source, map, log, target);
