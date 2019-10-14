/**
 *  This function is allowed to view book if disclaimer is accepted.
 *
 * @param {type} accepted_disclaimers
 * @returns void
 */
function accept_disclaimer(accepted_disclaimers) {
    document.cookie = "accepted_disclaimers = " + encodeURIComponent(accepted_disclaimers);
    document.location.reload(true)
}
