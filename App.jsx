import './App.css'
import Tile from "./Tile.jsx";
function App() {
    const recipesData = [
        {
            title: "Scrambled Eggs",
            description: "Eggs that are scrambled",
            recipe: "Take some eggs, and scramble them."
        },
        {
            title: "Boiled Water",
            description: "Water that's boiled",
            recipe: "Take some water, and boil it. Watch out, it's hot!"
        },
        {
            title: "Toast",
            description: "Bread that's toasted",
            recipe: "Take some bread, and toast it. Spread butter for extra flavor."
        },
        {
            title: "Cereal",
            description: "Breakfast of champions",
            recipe: "Pour cereal in a bowl, add milk, and enjoy!"
        },
        {
            title: "Peanut Butter Sandwich",
            description: "A sticky situation",
            recipe: "Spread peanut butter on bread. Close it with another slice. Done!"
        },
        {
            title: "Microwave Pizza",
            description: "Dinner in a pinch",
            recipe: "Remove packaging, microwave for 2 minutes, and let it cool."
        },
        {
            title: "Instant Noodles",
            description: "Quick and easy",
            recipe: "Boil water, add noodles and seasoning, wait 3 minutes, and eat."
        },
        {
            title: "Grilled Cheese",
            description: "Cheese that's grilled",
            recipe: "Butter bread, add cheese, grill until golden. Voilà!"
        },
        {
            title: "Ice Cubes",
            description: "Water, but colder",
            recipe: "Fill tray with water, freeze, and use as needed."
        },
        {
            title: "Fruit Salad",
            description: "A salad, but sweet",
            recipe: "Chop fruits, mix them, and pretend it's healthy."
        }
    ];
    return (
        <div>
            <h1>Cookbook</h1>
            <div className={"tile-container"}>
                {recipesData.map((tile, index) => (
                    <Tile
                        key={index}
                        title={tile.title}
                        description={tile.description}
                        recipe={tile.recipe}
                    />
                ))}
            </div>
        </div>
    )
}

export default App


