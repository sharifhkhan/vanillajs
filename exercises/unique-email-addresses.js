/*
* Problem Source: https://leetcode.com/problems/unique-email-addresses/

// Initial approach to solution

/**
 * @param {string[]} emails
 * @return {number}
 */
let numUniqueEmails = function (emails) {
    let uniqueEmails = new Set();

    for (const e of emails) {
        let emailSplit = e.split('@');
        let local = emailSplit[0];
        let domain = emailSplit[1];

        let localSplit = local.split('+');
        let localRel = localSplit[0];

        let localClean = localRel.split('.').join('');
        uniqueEmails.add(localClean + domain);
    }
    return uniqueEmails.size;
};


// optimized
let numUniqueOptimized = function (emails) {
    const uniqueEmails = [];

    for (const e of emails) {

        // split local and domain
        const atMarker = e.indexOf('@');

        const local = e.substring(0, atMarker);
        const domain = e.substring(atMarker, e.length);

        // get everything before +
        const marker = local.indexOf('+');
        const localPre = local.substring(0, marker);

        // remove all .
        const localClean = localPre.replace(/./g, '');

        const unique = localClean + domain;

        if (!uniqueEmails.includes(unique)) {
            uniqueEmails.push(unique);
        }
    }
    return uniqueEmails.length;
};


// DOM workflow
let counter = document.getElementById('count');

counter.addEventListener('click', function () {
    let emails = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'];

    let emailCount = numUniqueEmails(emails);
    let emailoptimzed = numUniqueOptimized(emails);

    document.getElementById('result').innerHTML += 'There are ' + emailCount + ' unique emails. <br />';

    document.getElementById('result').innerHTML += 'There are ' + emailoptimzed + ' unique emails (optimized). <br />';
});