export class LocatorHealingAgent {


    suggestLocator(
        failedLocator:string
    ){


        return {

            oldLocator:
            failedLocator,


            suggestedLocator:
            "Use role based locator",


            reason:
            "Improves stability"

        };


    }


}