export const formatTime = (time: string, timezone?: string | null) => {
    if (timezone) {
        const date = convertTZ(time, timezone);
        const gotMinutes = date.getHours();
        const gotHours = date.getMinutes();
        const minutes = gotMinutes > 9 ? gotMinutes : '0' + gotMinutes;
        const hours = gotHours > 9 ? gotHours : '0' + gotHours ;
    
        return `${hours}:${minutes}`
    }

    return time;
}

export const formatText = (text: string, width = 15) => {
    if (text && text.length > width) {
        const ellipsis = '…';
        
        return text.slice(0, width) + ellipsis;
    }

    return text;    
 }

function convertTZ(date: string, tzString: string) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}