# Video Files

Place your project video files here. Each video should correspond to a project's `sceneId`:

- `sturgeon.mp4` - Video for Sturgeon Detection project
- `aiid.mp4` - Video for AIID project
- `gonephishin.mp4` - Video for Gone Phishin' project
- `fico.mp4` - Video for FICO project
- `blackjack.mp4` - Video for BlackJack project
- `expense.mp4` - Video for Expense Tracker project

## Video Requirements

- Format: MP4 (H.264 codec recommended for browser compatibility)
- Duration: 10-30 seconds recommended
- Resolution: 1920x1080 or higher
- The video will be scrubbed based on scroll progress, so ensure smooth frame transitions
- Videos should loop seamlessly or have a clear beginning/end

## How It Works

The `VideoBackground` component will:
1. Detect when a project section is in view
2. Map scroll progress (0-1) to video time (0 to duration)
3. Update the video's currentTime to show the corresponding frame
4. Only activate when section is visible in viewport


