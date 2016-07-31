// This software is part of ICU, and as such is:

// Copyright © 1991-2016 Unicode, Inc. All rights reserved.
// Distributed under the Terms of Use in http://www.unicode.org/copyright.html.

// TODO rewrite as mocha/chai

var summary = {};

try {
    var i = Intl;
    summary.haveIntl = true;
    console.log("+ Congrats, you have the Intl object.");
} catch(e) {
    console.log("You don't have the Intl object: " + e);
}

var enero = new Intl.DateTimeFormat('es',{month:'long'}).format(new Date(9E8));

if (enero === 'enero') {
    console.log('OK! Formatted January in Spanish, === ' + enero);
} else {
    throw new Error('FAIL! Expected “enero” but got “'+enero+'”.');
}