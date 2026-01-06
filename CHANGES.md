# Recent Changes

## ✅ Completed Updates

### 1. Name Color Uniformity
- **Fixed**: Removed the emerald color from "III" in the name
- **Location**: `src/app/page.tsx` - Home section
- The full name "Evans Armantrading III" now displays in uniform cream color

### 2. Enhanced Project Details
- **Added**: Comprehensive project information fields to the Project interface
- **New Fields**:
  - `detailedDescription` - In-depth project overview
  - `challenges` - Array of challenges faced and solutions
  - `keyAchievements` - List of notable accomplishments
  - `technicalDetails` - Technical implementation specifics

- **Updated**: All 6 projects now include detailed information:
  - **Sturgeon Detection**: Full pipeline details, YOLO implementation, conservation impact
  - **AIID**: Multi-stage forensics system, routing mechanism, dataset curation
  - **Gone Phishin'**: Chrome extension architecture, Gemini API integration, hackathon details
  - **FICO**: BERT fine-tuning, intent classification, accuracy metrics
  - **BlackJack**: OOP design, team collaboration, Java best practices
  - **Expense Tracker**: Vanilla JS implementation, state management, localStorage

- **UI Enhancement**: Project detail sections now display:
  - Overview (existing outcome)
  - Project Details (new detailed description)
  - Key Achievements (bullet list)
  - Challenges & Solutions (bullet list)
  - Technical Implementation (detailed technical info)
  - Role, Tech Stack, and Tags (existing)

### 3. Video-Based Backgrounds (Replaced 3D Canvas)
- **Replaced**: React Three Fiber 3D canvas with scroll-driven video backgrounds
- **New Component**: `VideoBackground.tsx`
  - Detects when project section is in viewport
  - Maps scroll progress (0-1) to video time (0 to duration)
  - Only shows video when section is active
  - Smooth opacity transitions between sections

- **Benefits**:
  - Smaller bundle size (137 kB vs 347 kB)
  - More control over visual content
  - Easier to create and update project visuals
  - Better performance (no WebGL rendering)

## 📁 New File Structure

```
public/
├── videos/              # NEW: Video files for project backgrounds
│   ├── sturgeon.mp4
│   ├── aiid.mp4
│   ├── gonephishin.mp4
│   ├── fico.mp4
│   ├── blackjack.mp4
│   └── expense.mp4
└── posters/             # Existing: Fallback images for mobile/reduced motion
    └── ...
```

## 🎥 Video Requirements

### File Format
- **Format**: MP4 (H.264 codec recommended)
- **Duration**: 10-30 seconds recommended
- **Resolution**: 1920x1080 or higher
- **File Size**: Optimize for web (aim for <5MB per video)

### Content Guidelines
- Videos should represent the project theme/concept
- Smooth frame transitions (will be scrubbed based on scroll)
- Can loop seamlessly or have clear beginning/end
- Keep in mind videos will be shown at 30% opacity behind content

### How It Works
1. User scrolls to a project section
2. Video background fades in (opacity transition)
3. As user scrolls through the section, video time maps to scroll progress
4. When section leaves viewport, video fades out
5. Only one video is active at a time

## 📝 Next Steps

1. **Add Video Files**: Place your project videos in `/public/videos/` with names matching the `sceneId`:
   - `sturgeon.mp4`
   - `aiid.mp4`
   - `gonephishin.mp4`
   - `fico.mp4`
   - `blackjack.mp4`
   - `expense.mp4`

2. **Test Scroll Behavior**: 
   - Scroll through each project section
   - Verify video frames update smoothly with scroll
   - Check that only active section's video is visible

3. **Optional Enhancements**:
   - Adjust video opacity in `VideoBackground.tsx` (currently 0.3)
   - Add video loading states
   - Implement video preloading for smoother transitions

## 🔧 Technical Notes

- **Removed Dependencies**: React Three Fiber and drei are no longer needed (can be removed from package.json if desired)
- **Performance**: Video backgrounds are more performant than WebGL rendering
- **Accessibility**: Videos automatically disabled on mobile and when `prefers-reduced-motion` is enabled
- **Fallback**: Static poster images still used for mobile/reduced motion users


