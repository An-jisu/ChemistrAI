import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState, useEffect } from 'react';

const Analyze_result = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setSelectedIngredient(null); // Clear selected ingredient when changing the tab
  };

// 서버에서 성분 정보를 가져오는 함수
  const fetchIngredients = async () => {
        try {
          const response = await fetch('YOUR_API_URL'); // 실제 API 엔드포인트로 대체
          const data = await response.json();
          setIngredients(data);
        } catch (error) {
          console.error('Error fetching ingredients:', error);
        }
    };

 useEffect(() => {
        // 컴포넌트가 마운트될 때 성분 정보를 가져오도록 호출
        fetchIngredients();
      }, []);

  // Dummy data for all, bad, and good ingredients
  const allIngredients = [
      {
        name: "Dimethicone",
        function: "Emollient, skin protectant",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to silicone-based ingredients",
        skintype: "Dry",
        IsITGood: "Bad"
      },
      {
        name: "Ethylhexyl Methoxycinnamate",
        function: "UV filter, sunscreen agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sunscreen ingredients",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Ethylhexyl Salicylate",
        function: "UV filter, sunscreen agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sunscreen ingredients",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Butylene Glycol Dicaprylate/Dicaprate",
        function: "Emollient, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to butylene glycol",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Octocrylene",
        function: "UV filter, sunscreen agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sunscreen ingredients",
        skintype: "Dry",
        IsITGood: "Bad"
      },
      {
        name: "Cetyl Ethylhexanoate",
        function: "Emollient, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to cetyl ethylhexanoate",
        skintype: "Dry",
        IsITGood: "Bad"
      },
      {
        name: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
        function: "UV filter, sunscreen agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sunscreen ingredients",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Glyceryl Caprylate",
        function: "Emollient, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to glyceryl caprylate",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Ethylhexylglycerin",
        function: "Skin conditioning agent, preservative",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to ethylhexylglycerin",
        skintype: "Dry",
        IsITGood: "Bad"
      },
      {
        name: "Sea Water",
        function: "Hydrating, mineral-rich",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sea water",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Betula Platyphylla Japonica Juice",
        function: "Moisturizing, soothing",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to betula platyphylla japonica juice",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Saccharide Hydrolysate",
        function: "Moisturizing, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to saccharide hydrolysate",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Fructooligosaccharides",
        function: "Moisturizing, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to fructooligosaccharides",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Dehydroacetic Acid",
        function: "Preservative",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to dehydroacetic acid",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Pullulan",
        function: "Film-forming agent, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to pullulan",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Butylene Glycol",
        function: "Solvent, humectant",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to butylene glycol",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Glycerin",
        function: "Humectant, moisturizer",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to glycerin",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Job's Tears Extract",
        function: "Moisturizing, soothing",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to Job's tears extract",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Propylene Glycol",
        function: "Solvent, humectant",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to propylene glycol",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Panthenol",
        function: "Moisturizing, soothing",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to panthenol",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Tocopherol",
        function: "Antioxidant, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to tocopherol",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Ceramide NP",
        function: "Skin conditioning agent, moisturizer",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to ceramide NP",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Sucrose Stearate",
        function: "Emulsifier, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sucrose stearate",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Aquilegia Flavescens Seed Oil",
        function: "Moisturizing, soothing",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to aquilegia flavescens seed oil",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Salvia Officinalis (Sage) Leaf Extract",
        function: "Antioxidant, soothing",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sage leaf extract",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Morus Alba Leaf Extract",
        function: "Antioxidant, brightening",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to morus alba leaf extract",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Ocimum Basilicum (Basil) Leaf Extract",
        function: "Antioxidant, soothing",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to basil leaf extract",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Helianthus Annuus (Sunflower) Seed Oil Unsaponifiables",
        function: "Emollient, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to sunflower seed oil unsaponifiables",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Cholesterol",
        function: "Emollient, skin conditioning agent",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to cholesterol",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Stearic Acid",
        function: "Emulsifier, surfactant",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to stearic acid",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Palmitic Acid",
        function: "Emollient, surfactant",
        sideEffects: "May cause skin irritation or allergic reactions in some individuals",
        cautions: "Avoid if you have known sensitivity to palmitic acid",
        skintype: "Dry",
        IsITGood: "Good"
      },
      {
        name: "Linalool",
        function: "Fragrance ingredient, masking agent, and skin conditioning agent",
        sideEffects: "Linalool can cause skin irritation and allergic reactions in some individuals, especially those with sensitive skin.",
        cautions: "It is recommended to perform a patch test before using products containing linalool, especially for individuals with dry skin.",     
        skintype: "Dry",
        IsITGood: "Bad"
      }
      
  


    // Add more ingredients here...
];

  const badIngredients = allIngredients.filter((ingredient) => ingredient.IsITGood === 'Bad');
  const goodIngredients = allIngredients.filter((ingredient) => ingredient.IsITGood === 'Good');

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg">
        {/* Header */}
        <header className="mb-10 text-center flex items-center justify-center p-5">
          <Link to="/" className="pl-6 absolute left-0 text-2xl">
            <IoIosArrowBack className="mr-2" />
          </Link>
          <div className="flex">
            <h1 className="text-xl font-bold text-primary">Ingredient list</h1>
            <img className="w-98px h-38px absolute right-0 pr-6" src="./use.png" alt="use" />
          </div>
        </header>

        {/* Tabs */}
        <nav className="h-36px flex justify-center items-center">
          <ul className="flex list-none p-0">
            <li
              className={`mr-16 cursor-pointer ${
                activeTab === 0 ? 'text-black' : 'text-gray-300'
              } border-b ${
                activeTab === 0 ? 'border-black' : 'border-white'
              }`}
              onClick={() => handleTabClick(0)}
            >
              All
            </li>
            <li
              className={`mr-16 cursor-pointer  ${
                activeTab === 1 ? 'text-bad' : 'text-gray-300'
              } border-b ${
                activeTab === 1 ? 'border-bad' : 'border-white'
              }`}
              onClick={() => handleTabClick(1)}
            >
              Bad
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === 2 ? 'text-primary' : 'text-gray-300'
              } border-b ${
                activeTab === 2 ? 'border-primary' : 'border-white'
              }`}
              onClick={() => handleTabClick(2)}
            >
              Good
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="bg-gray_2 pl-5 pr-5 pb-5">
          {activeTab === 0 && (
            <ul className="pt-5">
              {allIngredients.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="flex items-center py-3 cursor-pointer bg-white mb-2"
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  <div
                    className={`ml-2 ${
                      ingredient.IsITGood === 'Bad' ? 'bg-bad' : 'bg-primary'
                    } w-2 h-6 rounded-full mr-3`}
                  />
                  <span className="text-lg">{ingredient.name}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 1 && (
            <ul className="pt-5">
              {badIngredients.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="flex items-center py-3 cursor-pointer"
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  <div className="ml-2 bg-bad w-2 h-6 rounded-full mr-3" />
                  <span className="text-lg">{ingredient.name}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 2 && (
            <ul className="pt-5">
              {goodIngredients.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="flex items-center py-3 cursor-pointer"
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  <div className="ml-2 bg-primary w-2 h-6 rounded-full mr-3" />
                  <span className="text-lg">{ingredient.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Ingredient Popup */}
        {selectedIngredient && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-7"
            onClick={() => setSelectedIngredient(null)}
          >
            <div className="bg-white p-7 rounded-md">
              <h2 className="text-3xl font-bold mb-2 mb-10">{selectedIngredient.name}</h2>
              <hr className="my-4 border-b border-gray_2" />
              <div>
                <strong className='text-lg'>Function:</strong> 
                <h2 className='mb-4'>{selectedIngredient.function}</h2>
              </div>
              <div>
                <strong className='text-lg'>Side Effects:</strong> 
                <h2 className='mb-4'>{selectedIngredient.sideEffects}</h2>
              </div>
              <div>
                <strong className='text-lg'>Caution:</strong> 
                <h2 className='mb-4'>{selectedIngredient.cautions}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyze_result;