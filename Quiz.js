class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gamestate')
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gamestate: state
        });
    }
    
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value")
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question()
            question.display()
        }
    }
    play(){
        question.hide();
        background("yellow");
        fill(0)
        textSize(30)
        text("RESULT OF THE QUIZ",340, 50);
        //text("--------------------------------",320,65)
        Contestant.getPlayerInfo();
        if(allContestant !== undefined){
            debugger;
            var display_Answers =230
            fill("Blue")
            textSize(20);
            text("*NOTE: the contestant who answered correct are highlighted in green color",130,230)
        
            for(var plr in allContestant){
                debugger;
                var correctAns = "2";
            if(correctionAns === allContestants){
                fill("green")
                
            }
            else{
                fill("red");


            display_Answers+=30
            textSize(20)
            text(allContestants[plr].name + ":" + allContestants[plr].answer, 250,display_Answers)
            }
            }
        
        
        }

    }

}