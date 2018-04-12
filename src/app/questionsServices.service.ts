export class questionsService {
    questions = [
        {
            questionId:1,
            questionItem:'Which country is the highest population in the world?',
            questionChoice1:'USA',
            questionChoice2:'China',//r
            questionChoice3:'India'

        },
        {
            questionId:2,
            questionItem:'Which country is the biggest in the world?',
            questionChoice1:'USA',
            questionChoice2:'Canada',
            questionChoice3:'Russia'//r

        },
        {
            questionId:3,
            questionItem:'Which country is the biggest in the world?',
            questionChoice1:'Monaco',//r
            questionChoice2:'Vatican City',
            questionChoice3:'Tuvalu'

        },
        {
            questionId:4,
            questionItem:'Which country is the biggest in the world?',
            questionChoice1:'Korea',
            questionChoice2:'Bangladesh',
            questionChoice3:'Monaco'//r

        },
        {
            questionId:5,
            questionItem:'What is the biggest animal in the world?',
            questionChoice1:'Ostrich',
            questionChoice2:'Blue Whale',//r
            questionChoice3:'Colossal Squid'

        },
        {
            questionId:6,
            questionItem:'What is the fastest mammal in the world?',
            questionChoice1:'Cheetah',//r
            questionChoice2:'Free-Tailed Bat',
            questionChoice3:'Pronghorn'

        },
        {
            questionId:7,
            questionItem:'What is the largest island in the world?',
            questionChoice1:'Madagascar',
            questionChoice2:'Greenland',//r
            questionChoice3:'Borneo'

        },
        {
            questionId:8,
            questionItem:'What is the poorest country in the world?',
            questionChoice1:'Liberia',
            questionChoice2:'Congo',
            questionChoice3:'Central African Republic'//r

        },
        {
            questionId:9,
            questionItem:'Which country has the most gold in the world?',
            questionChoice1:'Japan',
            questionChoice2:'India',//r
            questionChoice3:'Netherlands'

        },
        {
            questionId:10,
            questionItem:'Which country has the most beautiful girls?',
            questionChoice1:'Denmark',
            questionChoice2:'Ukraine',
            questionChoice3:'Brazil'//r

        }
    ];
    customerAnswer: {questionId:number,customerChoice:string}[]=[];
    arrCus=[];
    arr = ['B','C','A','C','B','A','B','C','B','C'];
    sum:number=0;

    //remove answer of the previous question
    onQuestionsUpdate(id){
        for(let i=0;i<this.customerAnswer.length;i++){
            if(this.customerAnswer[i].questionId==id){
                this.customerAnswer[i].customerChoice = ''
            }
        }
        //console.log(this.arrCus);
        console.log(this.customerAnswer);
        console.log(this.customerAnswer[id-1]);
    }

    //update customer's answer
    onCustomerAnswerUpdate(id,radio){
        if(this.customerAnswer.length==0||this.customerAnswer[id]==undefined){
            this.customerAnswer.push({questionId:id+1,customerChoice:radio});
        }
        //check the if answer already exit in answer array
        for(let i=0;i<this.customerAnswer.length;i++){
            if(this.customerAnswer[i].questionId==id+1){
                this.customerAnswer[i].customerChoice = radio;
            }
        }
        console.log(this.customerAnswer);
    }

    onScoreUpdate() {

        for (let i = 0; i < this.customerAnswer.length; i++) {
            //this.arrCus.push({i:this.customerAnswer[i].customerChoice});
            //this.arrCus[i] = this.customerAnswer[i].customerChoice;
            this.arrCus.push(this.customerAnswer[i].customerChoice);
        }
        console.log(this.arrCus);

    }
    ScoreSumup(){

        for(let i=0;i<this.arr.length;i++){
            if(this.arr[i]==this.arrCus[i]){
                this.sum+=10;
            }
        }
        console.log(this.sum);

    }


}