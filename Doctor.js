// A class to process client message
const PatientMessage = require('./PatientMessage.js');
module.exports = class Doctor {

    patientMessage;
    messageSummary;
    messageNER;


    mentalIssues = ["user.depression", "user.anxiety", "user.cannotsleep"];
    constructor() {
        
    }

    async setMessage(patientMessage){
        this.patientMessage=patientMessage;
        await this.setMessageAttributes();
    }

    async setMessageAttributes() {
        this.messageSummary = await this.patientMessage.getSummary();
        this.messageNER = await this.patientMessage.getNER();
    }

    //Function checks if the user is asking for help with mental issues

    getIssue() {
        let intent = this.getIntent();
        if (this.mentalIssues.includes(intent)) {

            var mentalIssuesData = require('./mentalIssuesData.json').data;
            let issue = mentalIssuesData.find(el => el.name === intent)
            console.log(issue);
            return issue;
        }else{
            return null
        }
    }



    // Function gets reply based on the corpus file from existing response
    getReply() {
        console.log(this.messageSummary);
        if (this.messageSummary != null) {
            var issue=this.getIssue();
            if (issue!=null){
                return issue.summary;
            }
            return this.messageSummary['answer'];
        } else {
            return null
        }
    }


    // Function gets intent from existing response

    getIntent() {
        if (this.messageSummary != null) {
            return this.messageSummary['intent'];
        } else {
            return null
        }
    }

    // Function gets intent from existing response

    getMessageNER() {
        if (this.messageNER != null) {
            return this.messageNER;
        } else {
            return null
        }
    }





}