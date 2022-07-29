import {Journal} from "./Journal";

class JournalLine {
  code: string;
  account: string;
  debit: number;
  credit: number;
  journal: Journal;

  constructor(
    code: string,
    account: string,
    debit: number,
    credit: number,
    journal: Journal
  ) {
    this.code = code;
    this.account = account;
    this.debit = debit;
    this.credit = credit;
    this.journal = journal;
  }
}

export {JournalLine};
