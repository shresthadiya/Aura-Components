public class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> getAcc = new List<Account>();
        getAcc = [SELECT Id, Name FROM Account LIMIT 10];
        return getAcc;
    }
}