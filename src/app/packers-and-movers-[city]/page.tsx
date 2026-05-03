export const dynamic = 'force-dynamic';

export default function DisabledRoute() {
  // This route is completely disabled as all dynamic city routes 
  // are now handled by the high-performance [slug] engine.
  // We use force-dynamic and return null to prevent Next.js from 
  // attempting to prerender this old template during the build.
  return null;
}

