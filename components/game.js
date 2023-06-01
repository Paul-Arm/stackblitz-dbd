//import styles from '../styles/game.css';
import styled from 'styled-components';

const Game = styled.div`
  margin: 40px;
  border: 5px black;
`;

export default function Game({}) {
  return (
    <>
      <div />
      <main>
        <div class="game-bar ml-2 p-2 border border-gray-300 rounded">
          <form class="game-form " onsubmit="handleSubmit(event)">
            <label>
              <label>
                Killer:
                <select id="selectedKiller">
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </label>
              <label>
                Kills:
                <input type="number" id="numberValue" value="0" />
              </label>
              <label>
                Name:
                <input type="text" id="stringValue" value="" />
              </label>
            </label>

            <label>
              Map:
              <select id="selectedMap">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </label>
            <label class="flex items-center mb-4">
              Gens:
              <input type="number" id="stringValue" value="1" max="5" />
            </label>
            <label>
              Solo:
              <input type="checkbox" id="stringValue" value="1" max="5" />
            </label>
            <label>
              Date:
              <input type="datetime-local" id="stringValue" />
            </label>

            <button
              class="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <div />
    </>
  );
}
