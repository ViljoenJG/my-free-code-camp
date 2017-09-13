/*
  Design a cash register drawer function checkCashRegister() that accepts
  purchase price as the first argument (price), payment as the second argument (cash),
  and cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.

  Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
  Return the string "Closed" if cash-in-drawer is equal to the change due.

  Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function checkCashRegister(price, cash, cid) {
  var returned = [];
  var cidLkp = getCidLookup(cid);
  var change = cash - price;
  var totalInDrawer = Math.round(cid.map(a => a[1]).reduce((a, b) => {return a + b;}, 0) * 100) / 100;

  if (totalInDrawer < change) {
    return "Insufficient Funds";
  }

  if (totalInDrawer == change) {
    return 'Closed';
  }

  for (let denom in denomLkp) {
    var val = denomLkp[denom];
    if (change <= 0) {
  		break;
  	}

    if (val <= change) {
      var cntNeeded = (change - (change % val)) / val;
      console.log(cntNeeded);
      console.log(change);

      if (cidLkp[denom] >= change) {
        returned.push([denom, val * cntNeeded]);
        change -= val * cntNeeded;
      } else {
        returned.push([denom, cidLkp[denom]]);
        change = roundToDecimal(change - cidLkp[denom], 5, true);
      }
    }
  }

  // Here is your change, ma'am.
  return (returned.length !== 0 && change <= 0.01) ? returned : "Insufficient Funds";
}

var denomLkp = {
	'ONE HUNDRED': 100.00,
	'TWENTY': 20.00,
	'TEN': 10.00,
	'FIVE': 5.00,
	'ONE': 1.00,
	'QUARTER': 0.25,
	'DIME': 0.10,
	'NICKEL': 0.05,
	'PENNY': 0.01,
};

function getCidLookup(cid) {
	var cidLkp = {};

	for (var a=0; a<cid.length; a++) {
		cidLkp[cid[a][0]] = cid[a][1];
	}

	return cidLkp;
}

function roundToDecimal(val, dec, roundUp) {
  var exp = '1';
  for (var a=0; a<dec; a++) {
    exp += '0';
  }

  exp = parseInt(exp, 10);

  return (roundUp) ? Math.ceil(val * exp) / exp : Math.round(val * exp) / exp;
}

/*
  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
  checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
  checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
  checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
  checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
  checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
  checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
*/
