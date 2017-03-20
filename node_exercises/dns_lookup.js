// DNS lookup
//
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:
//
// $ node dns_lookup.
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.
//

var dns = require('dns');
var host = 'google.com'; //any host

dns.lookup(host, function(err, ip) {
  // finds the IP address of a domain assigned to a variable on line 12.
  console.log('IP address is: ', ip);
});
