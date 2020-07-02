import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  display() {
    
  }

  componentDidMount() {
    this.props.fetchContent();
    //this.props.showArticles();
  }

  render() {
    const randNum = Math.floor(Math.random() * 9)
    //const articles = this.props.articles
    const article = this.props.content
    return (
      <>
        {/* {Object.values(this.props.articles).length === 0 ? 
          null 
          : 
         //<div>{article}</div>
          <ul className="article-item"> 
            <li><img src={articles[0].urlToImage}/></li>
            <li>{articles[0].content}</li>
          </ul> */}
        <div id="cx-articlecover"></div> <div id="articlebody-i18n" data-i18n-hide-caption="HIDE CAPTION" data-i18n-show-caption="SHOW CAPTION" data-i18n-advertisement="Advertisement"></div> <div class="is-lead-inset"> <div data-layout="header" data-layout-mobile="" class="media-object type-InsetMediaIllustration header article__inset article__inset--type-InsetMediaIllustration article__inset--header article__inset--lead"> <figure class="media-object-image enlarge-image renoImageFormat- img-header article__inset__image" itemscope="itemscope" itemtype="http://schema.org/ImageObject"> <div data-mobile-ratio="66.66666666666666%" data-layout-ratio="66.66666666666666%" data-subtype="photo" class="image-container responsive-media article__inset__image__image"> <img srcset="https://images.wsj.net/im-205048?width=140&amp;size=1.5 140w, https://images.wsj.net/im-205048?width=540&amp;size=1.5 540w, https://images.wsj.net/im-205048?width=620&amp;size=1.5 620w, https://images.wsj.net/im-205048?width=700&amp;size=1.5 700w, https://images.wsj.net/im-205048?width=860&amp;size=1.5 860w, https://images.wsj.net/im-205048?width=1260&amp;size=1.5 1260w" src="https://images.wsj.net/im-205048?width=620&amp;size=1.5" data-enlarge="https://images.wsj.net/im-205048?width=1260&amp;size=1.5" alt="" title="McDonald’s says it is waiting three weeks before any new U.S. restaurants add dine-in service." /> </div> <figcaption class="wsj-article-caption article__inset__image__caption" itemprop="caption"> <h4 class="wsj-article-caption-content">McDonald’s says it is waiting three weeks before any new U.S. restaurants add dine-in service.</h4> <span class="wsj-article-credit article__inset__image__caption__credit" itemprop="creator"> <span class="wsj-article-credit-tag"> Photo: </span> John Marshall Mantel/Zuma Press </span> </figcaption> </figure> </div> </div> <div class="clearfix byline-wrap"> <div class="byline article__byline"> By <div class="author-container"> <button class="author-button">Heather Haddon</button><div class="author-dropdown"> <button aria-label="Close" class="mobile-modal-close">Close</button> <h3 class="mobile-modal-author-name">Heather Haddon</h3> <ul class="author-links"> <li> <span class="author icon bio" aria-hidden="true"></span> Biography </li> <li> <span class="author icon twitter" aria-hidden="true"></span> @heatherhaddon </li> <li> <span class="author icon email" aria-hidden="true"></span> heather.haddon@wsj.com </li> </ul> </div></div> </div> <time class="timestamp article__timestamp flexbox__flex--1"> July 1, 2020 5:30 pm ET </time> </div> <div id="share-target"> <div id="inlineToolTargetSB11759146096169573552604586480931672296312" class="shareMenuInlineWrap hide12 hide16"></div> </div> <div class="article-content"> <p> McDonald’s<span class="company-name-type"> Corp.</span> is pausing the reopening of dine-in service in the U.S. as coronavirus cases continue to spread across states.</p> <p>The burger giant said Wednesday that it would wait three weeks before any new U.S. restaurants add dine-in service to its drive-through, takeout and delivery operations.</p> <div class="paywall"><p>“Our resiliency will be tested again. Covid-19 cases are on the rise,” said a company letter by Joe Erlinger, McDonald’s U.S. president, and Mark Salebra, head of the National Franchisee Leadership Alliance owners association, that was viewed by The Wall Street Journal. </p> <p>McDonald’s operators began offering limited, dine-in service in May, and around 2,200 of its 14,000 U.S. restaurants now allow customers to eat their meals inside. Restaurant owners that began offering dine-in service can continue if their jurisdiction still allows it, the letter said, but the company decided to halt additional openings as a number of state and local governments tighten social-distancing regulations ahead of the July 4 holiday weekend.</p> <div id="cx-article-inline-newsletter-tile"></div> <p>More states, cities and counties are scaling back on reopening plans for bars and restaurants given a surge in virus cases. On Wednesday, California ordered 19 counties to stop allowing indoor dining and recreation for at least three weeks as cases have rapidly grown in the most populous areas. New York City, meanwhile, delayed indoor dining service that was slated to resume July 6.</p> <p>Various nonfood businesses are reassessing plans. For instance, Apple Inc. said it is temporarily closing 16 locations in Florida, Mississippi, Texas and Utah as of Wednesday, a spokesman said in an email. Ten of those closures were in Texas, which has seen a surge in Covid-19 cases recently.&nbsp;</p> <p>The reversals come as a blow for sit-down restaurants hoping to begin serving more customers this summer. But officials say the heightened rules are necessary as a number of coronavirus outbreaks have stemmed from crowded bars and interior spaces.</p> <p>McDonald’s has managed to recover much of its U.S. sales lost during the pandemic due to its busy drive-throughs. But the chain has had to respond to coronavirus cases that have broken out in some of its restaurants.</p> <p>Messrs. Erlinger and Salebra said operators needed to remain vigilant in following health and safety guidelines outlined by the company. Workers need to wear gloves and masks, and customers should have on facial coverings inside where required, they said in the memo.</p> <p>“This surge shows nobody is exempt from this virus—even places that previously had very few cases.”</p> <p> <strong>Write to </strong>Heather Haddon at heather.haddon@wsj.com</p> </div> <p>Copyright ©2020 Dow Jones &amp; Company, Inc. All Rights Reserved. 87990cbe856818d5eddac44c7b1cdeb8</p> </div> 
      </>
    )
  }
} 

export default Article;