# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## API Configuration

Define `VITE_CODESPACE_NAME` when running in GitHub Codespaces so the app can call the backend on port `8000`. Add it to `.env.local`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

For local development without `VITE_CODESPACE_NAME`, the frontend falls back safely to `http://localhost:8000`.

The app calls these API endpoints:

- `/api/activities/`
- `/api/leaderboard/`
- `/api/teams/`
- `/api/users/`
- `/api/workouts/`

## Scripts

```bash
npm run dev --prefix octofit-tracker/frontend
npm run build --prefix octofit-tracker/frontend
```
