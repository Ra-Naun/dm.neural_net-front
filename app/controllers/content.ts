import { NextApiRequest, NextApiResponse } from 'next';

const getContentForPage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.log('![ERROR]', e);

    res.status(200).json({
      success: false,
    });
  }
};

export { getContentForPage }
