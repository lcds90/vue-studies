// something like analytics or fs
export default {
    // both mixin and component will be executed, mixin then component mounted
    mounted(){
        console.info('Mounted from GLOBAL mixin imported in main.js!', this.name);
    }
}