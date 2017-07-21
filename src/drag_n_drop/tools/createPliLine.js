const bankRefNrStart = 2;
const bankRefNrLength = 8;

module.exports = function createPliLine(pliFileString, transfer) {
  const { date, ammount } = transfer.dateCurAmmount;
  const { senderAccount } = transfer.senderData;
  const senderBankRefNr = senderAccount.substr(bankRefNrStart, bankRefNrLength);
  const { benAccount, benName1, benName2, benAddress1, benAddress2 } = transfer.benInfo;
  const benBankRefNr = benAccount.substr(bankRefNrStart, bankRefNrLength);
  const { transferDesc1, transferDesc2, transferDesc3, transferDesc4 } = transfer.transferDesc;
  const { senderName1, senderName2, senderAddress1, senderAddress2 } = transfer.senderName;
  const pliLineString = [
    '110',
    `20${date}`,
    ammount.replace(',', ''),
    senderBankRefNr,
    0,
    `"${senderAccount}"`,
    `"${benAccount}"`,
    `"${senderName1}|${senderName2}|${senderAddress1}|${senderAddress2}"`,
    `"${benName1}|${benName2}|${benAddress1}|${benAddress2}"`,
    0,
    benBankRefNr,
    `"${transferDesc1}|${transferDesc2}|${transferDesc3}|${transferDesc4}"`,
    `"","","51"\r\n`
  ].join(',');

  return pliFileString + pliLineString;
};
