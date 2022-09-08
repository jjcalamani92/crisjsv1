import Markdown from 'markdown-to-jsx';
export const useMarkdownComponent = () => {

}
const markdownComponent = (markdown: () => JSX.Element) => {
    
  return (
    <div className="my-2 bg-white">

      <Markdown 
      
          options={{
            overrides: {
              Component: {
                component: markdown,
              },
            },
          }}
          >
          {`<Component/>`}
      </Markdown>
        </div>
  );
};

export default markdownComponent;

export class Card {
    rank: string;
    suit: string;
    Card: any;

    constructor(rank: string, suit: string) {
      this.rank = rank;
      this.suit = suit;
    }
    createCard = () => {
        let CardObj = {};
        let card = new this.Card('3', 'Hearts');
        console.log(card);
      };
  }