import cleanCodeImage from '../assets/CleanCode.png';
import cleanCoderImage from '../assets/CleanCoder.png';
import cleanArchitectureImage from '../assets/CleanArchitecture.jpeg';
import testDrivenDevelopmentImage from '../assets/TestDrivenDevelopment.jpeg';
import workingEffectivelyWithLegacyCodeImage from '../assets/WorkingEffectivelyWithLagacyCode.jpeg';  
 

export const getImageURL = (bookTitle) => {
  const imageMap = {
    'Clean Code': cleanCodeImage,
    'The Clean Coder': cleanCoderImage,   
    'Clean Architecture': cleanArchitectureImage,
    'Test Driven Development by Example': testDrivenDevelopmentImage,
    'Working Effectively With Legacy Code': workingEffectivelyWithLegacyCodeImage,
  };
  return imageMap[bookTitle] ;
}