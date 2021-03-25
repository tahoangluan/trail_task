
<template>
    <div>

        <div class="d-flex flex-column align-items-end mb-5" style="margin-right: 30%">
            <div class="d-flex flex-row justify-content-center">
                <div class="d-flex flex-row justify-content-center">
                    <div class="d-flex align-self-center">
                        <label class="d-flex align-self-center"><strong>{{msgArrayForm}}: </strong></label>
                        <input v-if="msgArrayForm==='numberSplit'" type="number" :class="'ml-2 input-data ' +msgArrayForm" style="width:75px">
                        <div v-if="msgArrayForm==='secondLargest'" :class="' extra-input-field '+ msgArrayForm">
                            <input type="number" class="ml-2 input-data" style="width:75px">
                            <input type="number" class="ml-2 input-data" style="width:75px">
                            <input type="number" class="ml-2 input-data" style="width:75px">
                            <input type="number" class="ml-2 input-data" style="width:75px">
                        </div>
                        <div v-else-if="msgArrayForm==='toArray'" class="d-flex ml-2">
                            <strong>{</strong>
                            <div  :class="' extra-input-field '+ msgArrayForm">
                                <to-array-function-component class="to_array_component"></to-array-function-component>
                            </div>
                            <strong>}</strong>
                        </div>
                        <div v-else :class="' extra-input-field '+ msgArrayForm">
                            <input v-if="msgArrayForm!=='numberSplit'" class="ml-2 input-data" style="width:75px">
                            <input v-if="msgArrayForm!=='numberSplit'" class="ml-2 input-data" style="width:75px">
                            <input v-if="msgArrayForm!=='numberSplit'" class="ml-2 input-data" style="width:75px">
                            <input v-if="msgArrayForm!=='numberSplit'" class="ml-2 input-data" style="width:75px">
                        </div>
                        <button @click="insertInputFeld(msgArrayForm)" v-if="msgArrayForm!=='numberSplit'" class="ml-2">
                            +
                        </button>

                    </div>
                    <div class="d-flex flex-column">
                        <button @click="resultOnClick(msgArrayForm)" class="ml-2 mt-2">Result</button>
                        <button @click="resetOnClick(msgArrayForm)" class="ml-2 mt-2">Reset</button>
                    </div>
                </div>
                <div class="d-flex mt-2">
                    <label class="d-flex align-self-center ml-2">Result: </label>
                    <textarea readonly class="ml-2" :id="msgArrayForm"></textarea>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    /* eslint-disable */

    import $ from "jquery"
    import Vue from "vue"
    import {exportFunction} from "@/task3"
    import ToArrayFunctionComponent from "@/components/ToArrayFunctionComponent";

    export default {
        name: "ArrayForm",
        components: {ToArrayFunctionComponent},
        props: {
            msgArrayForm: String
        },

        methods: {
            insertInputFeld(msg) {
                if ($(".extra-input-field." + msg) !== undefined){
                    let extra_input_field = $(".extra-input-field." + msg)
                    if (msg === "toArray"){
                        var vuecomp = Vue.extend(ToArrayFunctionComponent);
                        var component = new vuecomp().$mount()
                        extra_input_field.append(component.$el)
                    }else {
                        extra_input_field.append("<input type='text' class='ml-2 input-data' style='width:30px'>")
                    }
                }
            },
            resultOnClick(msg) {
                if (msg === "filterArray" || msg === "secondLargest"|| msg === "allTruthy"){
                    let inputFields = $("div .extra-input-field." + msg + " :input")
                    let array = []
                    for (let i = 0; i < inputFields.length; i++) {
                        let value = inputFields[i].value
                        if (isNaN(Number(value))) {
                            if (value === "null") {
                                array.push(null)
                            } else if (value.toLowerCase() === "nan") {
                                array.push(NaN)
                            }else if (value.toLowerCase() === "undefined") {
                                array.push(undefined)
                            }else if (value === '""' || value === "''"){
                                array.push("")
                            }
                            else {
                                if (value.startsWith('"')&&value.endsWith('"')){
                                    array.push(value.replaceAll('"',""))
                                }else {
                                    array.push(value)
                                }
                            }
                        }  else {
                            array.push(Number(value))
                        }
                    }
                    let result = exportFunction(array, msg)
                    console.log(msg+ ": Result of ["+array+ "] is => ",result)
                    $("#"+msg).val("["+result+"]")
                }
                if (msg === "toArray"){
                    let to_array_component = $("div .extra-input-field." + msg + " >div")
                    let json = {}
                    for (let i=0;i<to_array_component.length;i++){
                        let key = to_array_component[i].childNodes[0].value
                        let value = to_array_component[i].childNodes[2].value
                        let compare = ["null", "undefined"]
                        console.log(key !== "")
                        if (!compare.includes(key) && key.trim().length !== 0 && value.trim().length !==0 ){
                            json[key] =value
                        }
                    }
                    let result = exportFunction(json, msg)
                    console.log(msg+ ": Result of [",json+ "] is => ",result)
                    let msgToDisplay = ""
                    if (result.length === 1){
                        msgToDisplay = result
                    }else {
                        for (let i=0;i<result.length;i++){
                          msgToDisplay = msgToDisplay + "["+ result[i]+ "]"+", "
                        }
                        msgToDisplay = msgToDisplay.slice(0, -2);
                    }
                    $("#"+msg).val("["+msgToDisplay+"]")
                }
                if (msg === "numberSplit"){
                    let value = $(".input-data." + msg).val()
                    if (value.trim().length !==0 && value !== "e"){
                        let result = exportFunction(value, msg)

                        $("#"+msg).val("["+result+"]")
                    }
                }


            },
            resetOnClick(msg) {
                if (msg === "numberSplit"){
                    $(".input-data." + msg).val("")
                }
                else {
                    let inputFields = $("div .extra-input-field." + msg).find('input')
                    inputFields.val('')
                }
            },

        }
    }
</script>

<style scoped>
    .extra-input-field.toArray{
        display: flex;
    }
    .extra-input-field {
        overflow-x: scroll;
        max-width: 400px;
        white-space: nowrap;
    }
</style>