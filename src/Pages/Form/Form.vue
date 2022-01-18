<script >
    import Datepicker from 'vue3-date-time-picker'
    import 'vue3-date-time-picker/dist/main.css'
    import { validateEmail, formatDate } from '../../utils/utils.js'
    import { postNewUser } from '../../api/apiHandler.js'
    import { ref } from 'vue';
    
    export default{
        name: 'Form', 
        data() {
            return {
                form: {
                    email: '',
                    birthDate: ref(new Date()),
                    optin: false,
                },
                emailPlaceholder: 'Entrez votre email',
                emailError: null,
                birthDateError: null
            }
        },
        components: {
            Datepicker
        },
        methods: {
            async submitForm(){
                //on admet qu'une autre validation est faite côté back. L'unicité des emails n'est pas implémentée mais nous ne la traiterons pas dans le front. 
                if(!validateEmail(this.form.email)){
                    this.emailError = 'Email invalide'
                    setTimeout(() => this.emailError = null, 2000)
                    return
                }

                if(!this.form.birthDate){
                    this.birthDateError = 'Anniversaire invalide'
                    setTimeout(() => this.emailError = null, 2000)
                    return
                }

                try{
                    await postNewUser({...this.form, choice: this.$store.state.count})
                    return this.$router.push('/')
                }
                catch(err){
                    console.log(err)
                }
            }
        },
        
    }   
</script>

<template>
    <div id="form">
        <h1 class="title">Formulaire</h1>
        
        <form
            class="form"
            v-on:submit.prevent="submitForm"
            method="post"
        >
            <div class="fields-wrapper">
                <div class="field">
                    <label for='email'>Email:</label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        name="email"
                        :placeholder="[[emailPlaceholder]]"
                        @focus="emailPlaceholder = ''"
                        @blur="emailPlaceholder = 'Entrez votre email'"
                    > 
                    <span class="alert" v-if="emailError">Email invalide</span>
                </div>

                <div class="field">
                    <label for="birthdate">Anniversaire:</label>
                    <Datepicker 
                        id="birthdate" 
                        name="birthdate" 
                        v-model="form.birthDate"
                        :upperLimit="new Date()"
                        :lowerLimit="new Date(1900, 1, 1)"
                        :clearable="false"
                        :enableTimePicker="false" 
                        autoApply 
                        :closeOnAutoApply="true"
                    />
                    <span class="alert" v-if="birthDateError">Date invalide</span>
                </div>

                <div class='optin'>
                    <input id='optin' name='optin' type='checkbox' v-model="form.optin"/>
                    <label for='optin'>J'accepte de recevevoir des offres commerciales</label>
                </div>
            </div>

            <button class="button" type='submit'>Valider</button>
        </form>
    </div>
</template>

<style>
  @import './Form.scss';
  @import '../../styles/Elements.scss';
</style>
