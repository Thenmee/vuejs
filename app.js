new Vue({
    el:'#vue-app',
    data:{   
       output:"Your fav food"
    },
    methods:{
       readRefs:function(){
           console.log(this.$refs.test.innerText);
           this.output=this.$refs.input.value;
       }
    },
    computed:{
    
    }
});

    /*

    var data={
    name: 'Yushi'
}

Vue.components('greeting',{
    template:'<p> hey there ,i am {{name}}</p> <button v-on:click="changeName">Change name</button>',
    data :function(){
        return{
            name: data
        }
    },
    methods:{
        changeName:function(){
            this.name='Mario';
        }

    }
});

var one=new Vue({
    el:'#vue-app-one',
});
var two=new Vue({
    el:'#vue-app-two',
   
});


    var one=new Vue({
    el:'#vue-app-one',
    data:{   
        title:'Vue App One'
    },
    methods:{
       
    },
    computed:{
     greet:function(){
         return'Hello From app one :)';
     }
    }
});
var two=new Vue({
    el:'#vue-app-two',
    data:{
        title:'Vue App Two'
    },
    methods:{
       changeTitle:function(){
           one.title="Title Changed";
       }
    },
    computed:{
        greet:function(){
            return'Yo dudes,this is app 2 speaking to ya :)';
        }
    }
});

data:{
        name:'jack',
        characters:['Mario','Luigi','Yoshi','Bowser'],
        ninjas:[
            {name:'Ryu',age:25},
            {name:'Yoshi',age:25},
            {name:'Ken',age:25}

        ]

    },
    methods:{
       
    },
    computed:{
    
    }
    data:{
        available:false,
        nearby:false

    },
    methods:{
       
    },
    computed:{
       compClasses:function(){
           return{
               available:this.available,
               nearby:this.nearby
           }
       } 
    }
    
    data:{
        age:20,
        a:0,
        b:0

    },
    methods:{
       
    },
    computed:{
        addToA:function(){
            return this.a+this.age;
         },
         addToB:function(inc){
             this.b+this.age;
         }
    }
    

    
    data:{
        name:'',
        age :'',
        x:0,
        y:0
    },
    Methods:{
        add:function(inc){
            this.age+=inc;
        },
        subtract:function(dec){
            this.age-=dec;
        },
        updatexy:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;

        },
        click:function(){
            alert('You clicked me');

        },
        logName:function(){
           // console.log('you entered your name');


        },
        logAge:function(){
           // console.log('you entered your age');
        }
    }*/
    
    