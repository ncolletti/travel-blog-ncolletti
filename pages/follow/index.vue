<template>
<section class="d-flex justify-contnet-center relative z-1">
  <the-title id="title" class="">
    <h1 slot="title" class="text-3xl text-center">{{ title }} Me!</h1>
    <p slot="subtitle" class="text-grey-darkest text-center"><a href="/subscribe">Subscribe to my Blog!</a></p>
    <p slot="subtitle" class="text-grey-darkest text-center"><a href="/contact">Drop me a line by email!</a></p>
  </the-title>

  <section id="widgets" class="flex flex-wrap justify-center">
    <div class="w-2/5">
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">My recent books</div>
                <div class="goodreads">
                    <div id="gr_updates_widget">
                    <iframe id="the_iframe" src="https://www.goodreads.com/widgets/user_update_widget?height=400&num_updates=3&user=89785994&width=250" width="248" height="330" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            <div class="flex items-center">
            <div class="text-sm">
                <p class="text-gray-900 leading-none">See more choice book selections at</p>
                <p class="text-gray-600"><a href="https://www.goodreads.com/user/show/89785994-nick">Goodreads</a></p>
            </div>
            </div>
        </div>
    </div>
    <div class="max-2/5">
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">My top Albums in the last month:</div>
                <div class="spotify">
                    <img src="http://www.tapmusic.net/collage.php?user=fsb-zai&type=1month&size=3x3&caption=true"/>
                </div>
            </div>
            <div class="flex items-center">
            <div class="text-sm">
                <p class="text-gray-900 leading-none">See more of my music taste with</p>
                <p class="text-gray-600"><a href="https://www.last.fm/user/fsb-zai">Last.fm</a></p>
            </div>
            </div>
        </div>
    </div>
  </section>

</section>
</template>
<script>
const TheTitle = () => import('~/components/base-texts/the-title')
const title = 'Follow'
export default {
  name: title,
  transition: 'page-opacity',
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Information about how to follow my travels',
      },
    ],
  },
  data() {
    return {
      title,
    }
  },
  components: {
      TheTitle
  },
}
</script>
<style scoped>
.spotify>img {
    max-width: auto;
    max-height: 25rem;
    object-fit: contain;
}
#gr_updates_widget{
border-radius: 5px;
background-color:#fff;
border:solid #683205 10px;
-webkit-box-shadow: 0px 0px 4px 1px #595959,
inset 0px 0px 0px 1px #7D730B;
-moz-box-shadow: 0px 0px 4px 1px #595959,
inset 0px 0px 0px 1px #7D730B;
box-shadow: 0px 0px 4px 1px #595959,
inset 0px 0px 0px 1px #7D730B;
padding:15px 0 35px 15px;
width:250px;
height:330px;
}
#gr_footer{
margin-bottom:10px;
}
#gr_updates_widget p{
padding:0px;
margin:0;
font-size:14px;
}
#gr_footer img{
width:100px;
float:left;
}
#gr_updates_widget img{
	border-style:none;
}
</style>