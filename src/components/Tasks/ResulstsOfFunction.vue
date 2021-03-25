<template>
    <div>
        <h1 class="d-flex justify-content-between">Task 3: File results and print it to the browser or browser console
            <button class="btn btn-sm btn-secondary float-right mr-2" @click="$router.go(-1)">GO BACK</button></h1>
        <div>
            <a><strong>Tip: Please input the following Formats:</strong> Defaul is 0, "" for Empty String, NaN or nan
                for NaN, null for null, "2" for "2"
                and undefined for undefined. </a>
            <a>For Example: <img style="width: 40%"  :src="image"></a>
            <p class="mb-5">Now you can try it by yourself. Have fun.</p>
            <array-form v-for="i in 5" :key="i" :msg-array-form="getLabels(i)">

            </array-form>
        </div>
    </div>
</template>

<script>
    import ArrayForm from "@/components/ArrayForm";

    export default {
        name: "ResulstsOfFunction",
        components: {ArrayForm},
        props: {
            msg: String,
            msgArrayForm: String
        }, data() {
            return {
                image: require('@/assets/example.jpg')
            }
        },
        methods: {
            getLabels(i) {
                if (i === 1) {
                    return "filterArray"
                }
                if (i === 2) {
                    return "toArray"
                }
                if (i === 3) {
                    return "numberSplit"
                }
                if (i === 4) {
                    return "secondLargest"
                }
                if (i === 5) {
                    return "allTruthy"
                }
            }
        }
    }
</script>

<style scoped>

</style>