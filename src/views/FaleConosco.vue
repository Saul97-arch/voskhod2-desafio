<template>
    <div>
        <h1>Fale Conosco</h1>
        <p>
            Como foi a sua experiência usando nosso app? Possui dúvidas ou quer fazer comentários e sugestões? Estamos à
            sua disposição.
        </p>

        <v-form style="background-color: rgb(255, 255, 255, 0.5)">
            <v-text-field label="Seu email"></v-text-field>
            <v-textarea name="input-7-4" label="Seu texto"></v-textarea>
            <button>Enviar</button>
        </v-form>
    </div>
</template>

<style scoped>
button {
    color: #f4d03f;
    background-color: #01579b;
    margin: 5px;
    padding: 10px;
    border-radius: 7px;
}
h1 {
    background-color: rgb(255, 255, 255, 0.5);
    padding: 3px;
    border-radius: 7px;
    margin: 5px;
}
</style>
