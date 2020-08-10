import { connection } from '../app/database/mysql';
import { RescourceCategoryModel } from './rescource_category.model';

/**
 * 获取资源类别列表
 */
export const getRescourceCategory = async () => {
  const statement = `
    SELECT
      id, name, attrId
    FROM resource_category
    ORDER BY id ASC
  `;

  const [data] = await connection.promise().query(statement);

  return data;
};

/**
 * 创建资源类别
 */
export const createRescourceCategory = async (rescource_category: RescourceCategoryModel) => {
  // 准备查询
  const statement = `
    INSERT INTO resource_category
    SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, rescource_category);

  // 提供数据
  return data as any;
};

/**
 * 按名字查找分类
 */
export const getRescourceCategoryByName = async (rescourceCategoryName: string) => {
  // 准备查询
  const statement = `
    SELECT id, name 
    FROM resource_category
    WHERE name = ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, rescourceCategoryName);

  // 提供数据
  return data[0];
};

/**
 * 更新分类
 */
export const updateRescourceCategory = async (typeId: number, type: RescourceCategoryModel) => {
  // 准备数据
  const statement = `
    UPDATE resource_category
    SET ?
    WHERE id = ?
  `;

  // 执行
  const [data] = await connection.promise().query(statement, [type, typeId]);

  // 提供数据
  return data;
};

/**
 * 删除分类
 */
export const deleteRescourceCategory = async (typeId: number) => {
  // 准备数据
  const statement = `
    DELETE FROM resource_category
    WHERE id = ?
  `;

  // 执行
  const [data] = await connection.promise().query(statement, typeId);

  // 提供数据
  return data;
};

/**
 * 统计资源类别数量
 */
export const getRescourceCategoryTotalCount = async () => {
  // 准备查询
  const statement = `
    SELECT
      COUNT(DISTINCT resource_category.id) AS total
    FROM resource_category
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement);

  // 提供结果
  return data[0].total;
};