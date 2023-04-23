const parseFloraData = (data) => {
    let messageText = '';

    const result = data.results[0];
    const percentage = 100.0 * result.score;
    const genusScientificName = result.species.genus.scientificName;
    const familyScientificName = result.species.family.scientificName;
    const commonNames = result.species.commonNames;

    if (genusScientificName !== '') {
        messageText += `We are ${percentage}% sure this is a ${genusScientificName}. `;
    }
    if (familyScientificName !== '') {
        messageText += `Did you know that its family is actually ${familyScientificName}? `;
    }
    if (commonNames.length === 1) {
        messageText += `In addition, the most common name is ${commonNames[0]}! `;
    }
    else {
        let newMessage = '';
        for (const i in commonNames) {
            const name = commonNames[i]
            if (newMessage === '') {
                newMessage = 'Here are some of the species\' most common names: ';
            }
            if (i + 1 === commonNames.length) {
                newMessage += `and ${name}! `;
            }
            else {
                newMessage += `${name}, `;
            }
        }
        messageText += newMessage;
    }
    return { message : messageText }
};

module.exports = {
    parseFloraData,
}