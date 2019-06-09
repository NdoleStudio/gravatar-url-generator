<template>
    <div>
        <div class="flex justify-center h-screen">
            <div class="lg:w-6/12 md:w-8/12 mt-20 pb-8">
                <div class="text-6xl text-center mb-5">
                    Gravatar URL Generator
                </div>
                <div class="text-center p-5 pb-0 mb-10 bg-white text-blue-dark border-blue border rounded font-bold">
                    <form class="w-full">
                        <div class="flex flex-wrap w-full mb-6">
                            <div class="w-full">
                                <p class="text-center mb-10">
                                    Enter Your details below and your gravatar URl will automatically be generated
                                </p>
                            </div>
                            <div class="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                                <label class="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Email
                                </label>
                                <input v-model="inputEmail" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Email: e.g arnold@ndolestudio.com">
                            </div>
                            <div class="w-full md:w-1/4 px-3 mb-10">
                                <label class=" text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Size
                                </label>
                                <input v-model="inputSize" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="e.g 400">
                            </div>

                            <div class="w-full px-3">
                                <input class="appearance-none block w-full bg-red-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-last-name" placeholder="Your URL will appear here" type="url" readonly :value="url">
                            </div>

                            <div class="w-full flex flex-wrap mt-10">
                                <div class="w-1/4 m-auto">
                                    <img :src="imageUrl" class="border-2 border-grey-900 rounded-full"  alt="Gravatar Image">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="w-full text-center -mt-8">
            Created with ❤️ by <a class="font-bold text-blue-600" href="https://twitter.com/NdoleStudio" target="_blank">Ndole Studio LLC</a>.
        </div>
    </div>
</template>

<script>

import md5 from 'blueimp-md5';

export default {
    name: "App",
    data: function () {
        return {
            validSize: 400,
            validEmail: 'arnold@ndolestudio.com',
            inputSize: '',
            inputEmail: ''
        }
    },
    computed: {
        url: function () {
            return 'https://gravatar.com/avatar/' + md5(this.inputEmail) +'?s=' + this.inputSize;
        },
        imageUrl: function  () {
            return 'https://gravatar.com/avatar/' + md5(this.inputEmail) +'?s=400';
        }
    },
}
</script>

<style lang="scss">
@media screen and (min-height:1200px) {
    .bottom {
        position: absolute;
        bottom: 5px;
    }
}

@media screen and (max-height:1200px) {
    .bottom {
        margin-top: -20px;
    }
}
</style>
