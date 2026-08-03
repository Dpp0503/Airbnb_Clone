import { useState, useCallback } from 'react';
import Header from './components/Header';
import ListingHeader from './components/ListingHeader';
import PhotoHeroGrid from './components/PhotoHeroGrid';
import MainContentLayout from './components/MainContentLayout';
import Lightbox from './components/Lightbox';
import PhotoTour from './components/PhotoTour';
import StickyHeader from './components/StickyHeader';
import './styles/App.css';
import { useListingData } from './hooks/useListingData';

const PHOTOS = [
  '/Image/LivingRoom_2_4.png',
  '/Image/LivingRoom_2_1.png',
  '/Image/LivingRoom_2_2.png',
  '/Image/Bedroom_1_4.png',
  '/Image/Exterior_1_5.png'
];

function App() {
  const { listing, loading, error } = useListingData();

  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [initialPhotoTourCategory, setInitialPhotoTourCategory] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = useCallback((index: number) => {
    let categoryTitle = 'Living room 2';
    if (index === 3) {
      categoryTitle = 'Bedroom';
    } else if (index === 4) {
      categoryTitle = 'Exterior';
    }
    setInitialPhotoTourCategory(categoryTitle);
    setIsPhotoTourOpen(true);
  }, []);

  const handleShowAllClick = useCallback(() => {
    setInitialPhotoTourCategory(null);
    setIsPhotoTourOpen(true);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {loading && <div className="status-message">Loading...</div>}
        {error && <div className="status-message error">Error: {error}</div>}
        {!loading && !error && listing && (
          <>
            <StickyHeader 
              price={listing.pricing?.basePrice || 250} 
              currency={listing.pricing?.currency || 'USD'}
              rating={listing.metrics.overallRating}
              reviewsCount={listing.metrics.totalReviews}
            />
            <ListingHeader 
              title={listing.title}
            />
            <div id="photos">
              <PhotoHeroGrid 
                photos={PHOTOS} 
                onImageClick={handleImageClick}
                onShowAllClick={handleShowAllClick}
              />
            </div>
            <MainContentLayout listing={listing} />
          </>
        )}
      </main>

      {!loading && !error && listing && isLightboxOpen && (
        <Lightbox 
          photos={listing.photoTour.flatMap(section => section.imageUrls.map(url => ({ url, title: section.title })))}
          currentIndex={currentImageIndex}
          onClose={() => setIsLightboxOpen(false)}
          onNext={() => setCurrentImageIndex(prev => Math.min(prev + 1, listing.photoTour.flatMap(s => s.imageUrls).length - 1))}
          onPrev={() => setCurrentImageIndex(prev => Math.max(prev - 1, 0))}
        />
      )}

      {!loading && !error && listing && isPhotoTourOpen && (
        <PhotoTour 
          onClose={() => setIsPhotoTourOpen(false)}
          initialCategory={initialPhotoTourCategory}
          onImageClick={(globalIndex) => {
            setCurrentImageIndex(globalIndex);
            setIsLightboxOpen(true);
          }}
        />
      )}
    </div>
  );
}

export default App;

