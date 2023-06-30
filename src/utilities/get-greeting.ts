export default function getGreeting(): {
    greet:string,
    shift:boolean
} {
    const currentHour: number = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return {
            greet:'Good morning',
            shift:false
        };
    } else if (currentHour >= 12 && currentHour < 18) {
        return {
            greet:'Good afternoon',
            shift: false
        };
    } else {
        return {
            greet:`Good evening`,
            shift:true
        };
    };
}