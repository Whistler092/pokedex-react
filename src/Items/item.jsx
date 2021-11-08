
export const Item = ({pokemon}) => {

    console.log('pokemon', pokemon);
    return (
        <> 
            <p>{pokemon?.name}</p>
        </>
    )
};