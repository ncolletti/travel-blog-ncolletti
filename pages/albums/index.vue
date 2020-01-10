<template>
    <div class="flex flex-wrap relative z-1">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
            <img class="w-full" src="../../static/images/yosemite.jpg" alt="Sunset in the mountains">
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">
            <img class="w-full" src="../../static/images/yosemite.jpg" alt="Sunset in the mountains">
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
            <img class="w-full" src="../../static/images/yosemite.jpg" alt="Sunset in the mountains">
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">
            <img class="w-full" src="../../static/images/yosemite.jpg" alt="Sunset in the mountains">
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500">
            <img class="w-full" src="../../static/images/yosemite.jpg" alt="Sunset in the mountains">
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400">
            <img class="w-full" src="../../static/images/yosemite.jpg" alt="Sunset in the mountains">
        </div>
    </div>
    
</template>
<script>
const title = "Albums"
export default {
    name: title,
    transition: 'page-opacity',
    head: {
        title,
        meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Photo Albums of my Travels',
        },
        ],
    },
    data() {
        return {
            title,
        }
    },
    components: {
    },
}
</script>