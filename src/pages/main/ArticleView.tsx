
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ArticleView = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleShare = () => {
    toast({
      title: "Sharing options",
      description: "Share functionality would appear here.",
    });
  };

  // Article content based on ID
  const articles: Record<string, {
    title: string;
    author: string;
    date: string;
    readTime: string;
    heroImage?: string;
    content: React.ReactNode;
    productPromo?: {
      title: string;
      description: string;
      ctaText: string;
      link: string;
    };
  }> = {
    "magnesium-sleep": {
      title: "The Science of Magnesium for Better Sleep",
      author: "Dr. Sarah Johnson",
      date: "April 3, 2023",
      readTime: "5 min read",
      heroImage: "public/lovable-uploads/99df427d-9d50-45ff-a5a8-b9cf654902e4.png",
      content: (
        <div className="space-y-4">
          <p>Magnesium is one of the most abundant minerals in the human body and plays a crucial role in over 300 enzymatic reactions, including those involved in sleep regulation. Research has consistently shown that magnesium deficiency is linked to poor sleep quality and insomnia.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">How Magnesium Affects Sleep</h3>
          <p>Magnesium helps regulate neurotransmitters that calm the nervous system, preparing your body for sleep. It also binds to gamma-aminobutyric acid (GABA) receptors, which are the same receptors targeted by sleep medications like Ambien.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">The Benefits of Supplementation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduced time to fall asleep</li>
            <li>Improved sleep efficiency</li>
            <li>Increased total sleep time</li>
            <li>Enhanced slow-wave (deep) sleep</li>
            <li>Better daytime alertness</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Optimal Timing</h3>
          <p>Taking magnesium about 1-2 hours before bedtime allows your body to absorb it properly and maximize its sleep-enhancing effects. Studies show that consistent supplementation over 8 weeks provides the best results.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Choosing Quality Supplements</h3>
          <p>When selecting a magnesium supplement, it's important to choose highly bioavailable forms like magnesium glycinate, citrate, or threonate. These forms are better absorbed and cause fewer digestive side effects than cheaper oxide forms.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Combining with Other Sleep Aids</h3>
          <p>Magnesium works synergistically with other natural sleep aids. When combined with low-dose melatonin, chamomile, and L-theanine, the effects on sleep quality are enhanced beyond what each ingredient can do alone.</p>
        </div>
      ),
      productPromo: {
        title: "Man Matters Sleep+ with Magnesium",
        description: "Our premium sleep supplement combines high-quality magnesium glycinate with melatonin for optimal absorption and effectiveness.",
        ctaText: "Shop Now",
        link: "https://manmatters.com/products/sleep"
      }
    },
    "sleep-foundation": {
      title: "Sleep is the Foundation of Your Wellbeing",
      author: "Dr. Matthew Walker",
      date: "March 28, 2023",
      readTime: "7 min read",
      heroImage: "public/lovable-uploads/9cc4bb2e-4377-42f3-b84b-54ff9770a914.png",
      content: (
        <div className="space-y-4">
          <p>Sleep is not a luxury—it's a biological necessity. Despite this, many of us treat sleep as a negotiable part of our lives, something to be sacrificed in the pursuit of productivity, entertainment, or social interaction.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">The Science of Sleep</h3>
          <p>Sleep affects nearly every aspect of our physical and mental health. During sleep, your brain processes information from the day, consolidating memories and clearing out waste products. Your body repairs tissues, synthesizes proteins, and releases growth hormone.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">The Consequences of Sleep Debt</h3>
          <p>When you consistently get less sleep than your body needs, you accumulate sleep debt. Even small amounts can have significant impacts:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Impaired cognitive function and decision-making</li>
            <li>Reduced immune function</li>
            <li>Increased risk of heart disease and diabetes</li>
            <li>Greater likelihood of weight gain</li>
            <li>Negative effects on mood and emotional regulation</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Understanding Your Sleep Need</h3>
          <p>Your individual sleep need is largely determined by your genetics. While the average adult needs between 7-9 hours, some genuinely need more or less. The key is consistency—finding your optimal amount and sticking to it.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Building a Foundation for Wellness</h3>
          <p>Instead of seeing sleep as something that gets in the way of life, recognize it as the foundation that makes everything else possible. When you prioritize sleep, you'll likely find improvements in productivity, creativity, emotional stability, and physical health.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Practical Steps</h3>
          <p>Start by tracking your sleep and how you feel during the day. Experiment with different sleep durations to find your optimal range. Then, build your schedule around protecting that sleep time rather than fitting sleep into your remaining hours.</p>
        </div>
      )
    }
  };
  
  // Default article content if not found
  const defaultArticle = {
    title: "Article Not Found",
    author: "Mind Matters Team",
    date: new Date().toLocaleDateString(),
    readTime: "0 min read",
    content: <p>This article is not available.</p>
  };
  
  // Get content for current article or use default
  const article = articles[articleId || ""] || defaultArticle;
  
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-4 px-4 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-[#121520] z-10">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowLeft size={20} className="text-gray-400" />
        </button>
        <h1 className="text-lg font-medium line-clamp-1">{article.title}</h1>
        <button onClick={handleShare} className="p-1">
          <Share2 size={20} className="text-gray-400" />
        </button>
      </div>
      
      {/* Article Content */}
      <div className="pb-8">
        {/* Hero Image */}
        {article.heroImage && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={article.heroImage} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Article Header */}
        <div className="px-6 py-6">
          <h1 className="text-2xl font-bold mb-3">{article.title}</h1>
          
          <div className="flex items-center text-sm text-gray-400 mb-6">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
          
          {/* Article Body */}
          <div className="prose prose-invert max-w-none prose-headings:font-medium prose-p:text-gray-300">
            {article.content}
          </div>
        </div>
        
        {/* Product Promotion */}
        {article.productPromo && (
          <div className="px-6 mt-8">
            <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5">
              <h3 className="font-medium text-lg mb-2">{article.productPromo.title}</h3>
              <p className="text-sm opacity-90 mb-4">{article.productPromo.description}</p>
              <Button 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30"
                onClick={() => window.open(article.productPromo!.link, "_blank")}
              >
                {article.productPromo.ctaText}
              </Button>
            </div>
          </div>
        )}
        
        {/* Related Articles */}
        <div className="px-6 mt-12">
          <h3 className="text-xl font-medium mb-4">Related Articles</h3>
          
          <div className="space-y-4">
            <div className="flex items-start border-b border-gray-800 pb-4">
              <div className="w-16 h-16 rounded-lg bg-gray-800 mr-3"></div>
              <div>
                <h4 className="font-medium line-clamp-2">The Impact of Blue Light on Your Sleep Cycle</h4>
                <p className="text-xs text-gray-400 mt-1">4 min read</p>
              </div>
            </div>
            
            <div className="flex items-start border-b border-gray-800 pb-4">
              <div className="w-16 h-16 rounded-lg bg-gray-800 mr-3"></div>
              <div>
                <h4 className="font-medium line-clamp-2">Sleep Consistency: The Hidden Key to Better Rest</h4>
                <p className="text-xs text-gray-400 mt-1">6 min read</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-lg bg-gray-800 mr-3"></div>
              <div>
                <h4 className="font-medium line-clamp-2">Natural Ways to Enhance Your Sleep Quality</h4>
                <p className="text-xs text-gray-400 mt-1">5 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
