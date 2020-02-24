export default function CategoryFromList(rawList){
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    };
    let listofTypes=[];

    rawList.map(item=>
        listofTypes.push(item.type)
    );
    return listofTypes.filter(unique);

};