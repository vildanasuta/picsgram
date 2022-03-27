  <template>
 <div class="row">
 <div class="col-2"></div>
 <div class="col-7">
 <pics-gram-feed v-for="card in filteredCards" :key="card.url" :info="card"/>


 </div>
 <div class="col-3">
   <stories v-for="story in stories" :key="story" :ikona="story"/>

 </div>
 </div>
</template>

<script>
let cards=[];
// @ is an alias to /src
import PicsGramFeed from '@/components/PicsGramFeed.vue'
import Stories from '@/components/Stories.vue'
cards=[
  {"url":'https://livinglikev.com/wp-content/uploads/2022/03/gray-hoodie-femme-luxe-review-living-like-v-fashion-blogger-livinglikev-femmeluxe-review.jpg',
  "description": "today's mood",
  "time":"few seconds ago"},
  
{"url":'https://livinglikev.com/wp-content/uploads/2022/02/teal-jumper-outfit-femmeluxe-livinglikev-femme-luxe-review-living-like-v-fashion-blogger-livinglikev.jpg',
"description":"outfit of the day",
"time":"2 days ago"},
{"url":'https://livinglikev.com/wp-content/uploads/2022/02/leather-leggings-femmeluxe.jpg',
"description":"what a wonderful day",
"time":" a week ago"},
{"url":'https://livinglikev.com/wp-content/uploads/2021/02/lightinthebox-tie-dye-shirt-review-livinglikev-1536x2048.jpg',
"description":"this shirt is so pretty",
"time":"a month ago"}

];
let stories=[];
stories=[
  'https://livinglikev.com/wp-content/uploads/2022/02/teal-jumper-outfit-femmeluxe-livinglikev-femme-luxe-review-living-like-v-fashion-blogger-livinglikev.jpg',
  'https://livinglikev.com/wp-content/uploads/2022/03/gray-hoodie-femme-luxe-review-living-like-v-fashion-blogger-livinglikev-femmeluxe-review.jpg',
'https://livinglikev.com/wp-content/uploads/2021/02/lightinthebox-tie-dye-shirt-review-livinglikev-1536x2048.jpg',
'https://livinglikev.com/wp-content/uploads/2022/02/leather-leggings-femmeluxe.jpg'



];
import store from '@/store.js'

export default {
  name: 'HomeView',
  data:function(){
    return{
      cards,
      stories,
      store,

    }
  },
  computed:{
   
    filteredCards(){
      let zapretragu=this.store.searchTerm;
      let postoviKojiOdgPretrazi= cards.filter((card)=>card.description.includes(zapretragu));
      return postoviKojiOdgPretrazi;
    },

  },
  components: {
    PicsGramFeed,
    Stories
  }
}
</script>
<style>
.row{
  padding-top:3%;
  padding-bottom:3%;
}


</style>
