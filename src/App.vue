<template>
    <div>
        <div class="flex justify-center h-screen">
            <div class="lg:w-6/12 md:w-8/12 mt-20 pb-8">
                <div class="text-6xl text-center mb-5">
                    Gravatar URL Generator
                </div>
                <div class="text-center p-5 pb-0 mb-10 bg-white text-blue-dark border-blue border rounded font-bold">
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
                                <input v-model="inputSize" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="e.g 400">
                            </div>

                            <div class="w-10/12 px-3">
                                <input @focus="$event.target.select()" class=" appearance-none block w-full bg-red-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Your URL will appear here" type="url" readonly :value="url">
                            </div>
                            <div class="w-2/12 px-3">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded input-height" v-clipboard:copy="url" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError" v-tooltip="{content:'URL Coppied successfully!', trigger: 'click', placement: 'bottom', autoHide: true}" >
                                    Copy to Clipboard
                                </button>
                            </div>

                            <div class="w-full flex flex-wrap mt-10">
                                <div class="w-1/4 m-auto">
                                    <img :src="imageUrl" class="border-2 border-grey-900 rounded-full"  alt="Gravatar Image">
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div class="w-full text-center -mt-8">
            Created with ❤️ by <a class="font-bold text-blue-600" href="https://twitter.com/NdoleStudio" target="_blank">Ndole Studio</a>.
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
            let sizeParameter = '';
            if(parseInt(this.inputSize) > 0) {
                sizeParameter += '?s=' + this.inputSize
            }
            return 'https://gravatar.com/avatar/' + md5(this.inputEmail) + sizeParameter;
        },
        imageUrl: function  () {
            return 'https://gravatar.com/avatar/' + md5(this.inputEmail) +'?s=400';
        }
    },

    methods: {
        onCopySuccess() {

        },
        onCopyError () {

        }
    }
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

.input-height {
    min-height: 44px;
}

.tooltip {
    display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background:rgba(#2264b4, .9);
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: rgba(#2264b4, .9);
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
