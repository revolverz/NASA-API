<template>
    <div >
        <div class="login">
            <div>
                 <ui-form-field class="required">
                    <label>Input:</label>
                    <ui-textfield></ui-textfield>
                </ui-form-field>
            </div>
            <div>
                 <ui-form-field class="required">
                    <label>Input2:</label>
                    <ui-textfield></ui-textfield>
                </ui-form-field>

            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
    .elem1 {
        justify-self: start;

    }
    .elem2 {
        justify-self: end;

    }
    .login {
        display: grid;
        height: 500px;
        width: 500px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
        justify-items: center;
    }

</style>
